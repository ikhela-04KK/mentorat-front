
$port = 9230
$processUsingPort = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue

if ($null -ne $processUsingPort) {
    $processId = $processUsingPort.OwningProcess
    Write-Host "Process ID $processId is using port $port. Attempting to stop the process..."
    Stop-Process -Id $processId -Force
    Write-Host "Process stopped."
} else {
    Write-Host "Port $port is not in use."
}
