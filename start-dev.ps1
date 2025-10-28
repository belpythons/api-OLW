# Start Development Servers Script
Write-Host "Starting Online Learning Website Development Environment..." -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
$nodeVersion = node --version 2>$null
if (-not $nodeVersion) {
    Write-Host "Error: Node.js is not installed!" -ForegroundColor Red
    exit 1
}
Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green

# Check if MySQL is running
$mysqlService = Get-Service -Name "mysql" -ErrorAction SilentlyContinue
if ($mysqlService.Status -ne "Running") {
    Write-Host "Warning: MySQL service is not running!" -ForegroundColor Yellow
    Write-Host "Starting MySQL service..."
    Start-Service -Name "mysql"
}
Write-Host "MySQL service is running" -ForegroundColor Green

# Start Backend Server
Write-Host ""
Write-Host "Starting Backend Server on port 4000..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server; npm run dev"

# Wait a moment for backend to start
Start-Sleep -Seconds 3

# Start Frontend Server
Write-Host "Starting Frontend Server on port 5173..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd client; npm run dev"

Write-Host ""
Write-Host "Development servers starting..." -ForegroundColor Green
Write-Host "Backend API: http://localhost:4000" -ForegroundColor Cyan
Write-Host "Frontend App: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to open the browser..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Open browser
Start-Process "http://localhost:5173"
