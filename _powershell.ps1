
# $port = 9230
# $processUsingPort = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue

# if ($null -ne $processUsingPort) {
#     $processId = $processUsingPort.OwningProcess
#     Write-Host "Process ID $processId is using port $port. Attempting to stop the process..."
#     Stop-Process -Id $processId -Force
#     Write-Host "Process stopped."
# } else {
#     Write-Host "Port $port is not in use."
# }
# Tableaux pour les images et les URIs
# Chemin d'enregistrement des images
$destinationPath = "C:\Users\Administrateur\Documents\mentorat\mentorat_front\public"

# Tableaux pour les images et les URIs
$images = @("1701828634456.jpg", "1701828634457.jpg", "1701828634458.jpg", "1701828634459.jpg", "1701828634460.jpg", "1701828634461.jpg", "170182863445.jpg")
$uris = @("https://avatars.githubusercontent.com/u/5818089", "https://avatars.githubusercontent.com/u/581804489", "https://avatars.githubusercontent.com/u/189", "https://avatars.githubusercontent.com/u/5889", "https://avatars.githubusercontent.com/u/581889", "https://avatars.githubusercontent.com/u/581889", "https://avatars.githubusercontent.com/u/581898")

# Télécharger les images à partir des URIs et les enregistrer dans le répertoire spécifié
for ($i = 0; $i -lt $images.Length; $i++) {
    $imagePath = Join-Path $destinationPath $images[$i]
    $uri = $uris[$i]
    
    # Télécharger l'image
    Invoke-WebRequest -Uri $uri -OutFile $imagePath
    
    # Afficher un message pour indiquer le téléchargement
    Write-Host "Image téléchargée: $imagePath à partir de $uri"
}

