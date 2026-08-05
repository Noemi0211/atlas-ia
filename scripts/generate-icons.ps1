# Genera los iconos de la PWA (manifest, apple-touch, favicon) con System.Drawing.
# Uso: powershell -ExecutionPolicy Bypass -File scripts\generate-icons.ps1

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$iconsDir = Join-Path $root "public\icons"
$appDir = Join-Path $root "app"
New-Item -ItemType Directory -Force -Path $iconsDir | Out-Null

$primary = [System.Drawing.ColorTranslator]::FromHtml("#2563eb")
$primaryHover = [System.Drawing.ColorTranslator]::FromHtml("#1d4ed8")
$white = [System.Drawing.Color]::White

function New-IconImage {
  param(
    [int]$Size,
    [bool]$FullBleed,
    [string]$FontName
  )
  $bmp = New-Object System.Drawing.Bitmap($Size, $Size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $rect = New-Object System.Drawing.RectangleF(0, 0, $Size, $Size)
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $rect, $primary, $primaryHover,
    [System.Drawing.Drawing2D.LinearGradientMode]::Vertical)

  if ($FullBleed) {
    $g.FillRectangle($brush, $rect)
  } else {
    $radius = [float]($Size * 0.22)
    $diameter = $radius * 2
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddArc(0, 0, $diameter, $diameter, 180, 90)
    $path.AddArc($Size - $diameter, 0, $diameter, $diameter, 270, 90)
    $path.AddArc($Size - $diameter, $Size - $diameter, $diameter, $diameter, 0, 90)
    $path.AddArc(0, $Size - $diameter, $diameter, $diameter, 90, 90)
    $path.CloseFigure()
    $g.FillPath($brush, $path)
    $path.Dispose()
  }

  # Glifo: "A" blanca, centrada
  try {
    $font = New-Object System.Drawing.Font($FontName, [float]($Size * 0.52), [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  } catch {
    $font = New-Object System.Drawing.Font("Arial", [float]($Size * 0.52), [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  }
  $sf = New-Object System.Drawing.StringFormat
  $sf.Alignment = [System.Drawing.StringAlignment]::Center
  $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
  $layout = New-Object System.Drawing.RectangleF(0, 0, $Size, $Size)
  $g.DrawString("A", $font, (New-Object System.Drawing.SolidBrush($white)), $layout, $sf)

  # Punto de acento (nodo) bajo la A
  $dotBrush = New-Object System.Drawing.SolidBrush($white)
  $dotX = $Size * 0.5
  $dotY = $Size * 0.75
  $dotR = $Size * 0.045
  $g.FillEllipse($dotBrush, $dotX - $dotR, $dotY - $dotR, $dotR * 2, $dotR * 2)

  $sf.Dispose()
  $font.Dispose()
  $brush.Dispose()
  $dotBrush.Dispose()
  $g.Dispose()

  return $bmp
}

function Save-Png {
  param([System.Drawing.Bitmap]$Bitmap, [string]$Path)
  $Bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  $Bitmap.Dispose()
}

function Write-Ico {
  param([string]$Path, [System.Drawing.Bitmap[]]$Bitmaps)
  $pngs = New-Object 'System.Collections.Generic.List[byte[]]'
  $sizes = New-Object 'System.Collections.Generic.List[int]'
  foreach ($b in $Bitmaps) {
    $ms = New-Object System.IO.MemoryStream
    $b.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
    $pngs.Add($ms.ToArray())
    $sizes.Add($b.Width)
    $ms.Dispose()
    $b.Dispose()
  }
  $count = $pngs.Count
  $headerSize = 6
  $dirSize = 16 * $count
  $msOut = New-Object System.IO.MemoryStream
  $bw = New-Object System.IO.BinaryWriter($msOut)
  $bw.Write([uint16]0); $bw.Write([uint16]1); $bw.Write([uint16]$count)
  $offset = $headerSize + $dirSize
  for ($i = 0; $i -lt $count; $i++) {
    $w = $sizes[$i]; $h = $sizes[$i]
    $bw.Write([byte]($w % 256)); $bw.Write([byte]($h % 256))
    $bw.Write([byte]0); $bw.Write([byte]0)
    $bw.Write([uint16]1); $bw.Write([uint16]32)
    $bw.Write([uint32]$pngs[$i].Length)
    $bw.Write([uint32]$offset)
    $offset += $pngs[$i].Length
  }
  for ($i = 0; $i -lt $count; $i++) { $bw.Write($pngs[$i]) }
  $bw.Flush()
  [System.IO.File]::WriteAllBytes($Path, $msOut.ToArray())
  $bw.Dispose()
  $msOut.Dispose()
}

# Iconos del manifest (esquinas redondeadas, fondo transparente)
Save-Png (New-IconImage -Size 192 -FullBleed $false -FontName "Segoe UI Black") (Join-Path $iconsDir "icon-192.png")
Save-Png (New-IconImage -Size 512 -FullBleed $false -FontName "Segoe UI Black") (Join-Path $iconsDir "icon-512.png")
# Maskable: fondo completo (área segura 80%), sin transparencia
Save-Png (New-IconImage -Size 512 -FullBleed $true -FontName "Segoe UI Black") (Join-Path $iconsDir "icon-512-maskable.png")
# Apple touch: 180x180, fondo completo, sin transparencia
Save-Png (New-IconImage -Size 180 -FullBleed $true -FontName "Segoe UI Black") (Join-Path $iconsDir "apple-touch-icon.png")

# Icono del sitio (favicon via app/icon.png)
Save-Png (New-IconImage -Size 512 -FullBleed $false -FontName "Segoe UI Black") (Join-Path $appDir "icon.png")

# favicon.ico con 16/32/48
$ico16 = New-IconImage -Size 16 -FullBleed $true -FontName "Segoe UI Black"
$ico32 = New-IconImage -Size 32 -FullBleed $true -FontName "Segoe UI Black"
$ico48 = New-IconImage -Size 48 -FullBleed $true -FontName "Segoe UI Black"
Write-Ico -Path (Join-Path $appDir "favicon.ico") -Bitmaps @($ico16, $ico32, $ico48)

Write-Output "Iconos generados en $iconsDir y $appDir"
