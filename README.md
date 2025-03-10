# FiveM React & Mantine Template

A modern FiveM resource template that combines React and Mantine UI framework for the frontend with Lua for the backend.

## Features

- 🚀 Modern React (TypeScript) setup with Vite
- 🎨 [Mantine](https://mantine.dev/) UI framework integration
- 🔄 Hot module replacement for rapid development
- 🌐 FiveM-ready configuration
- 📦 ox_lib integration
- 🔌 ESX compatibility
- 🗄️ MySQL support through oxmysql

## Prerequisites

- FiveM Server
- [Node.js](https://nodejs.org/) (for web development)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- ox_lib
- es_extended (ESX)
- oxmysql

## Installation

1. Clone this repository into your FiveM resources folder
2. Navigate to the web directory and install dependencies:
   ```bash
   cd web
   yarn install   # or npm install
   ```
3. Build the web assets:
   ```bash
   yarn build   # or npm run build
   ```

## Development

### Frontend (Web)
The frontend code is located in the `web` directory. To start development:

1. Navigate to the web directory:
   ```bash
   cd web
   ```
2. Start the development server:
   ```bash
   yarn dev   # or npm run dev
   ```

### Backend (Lua)
The backend is structured as follows:
- `client.lua` - Client-side logic
- `server.lua` - Server-side logic
- `config.lua` - Configuration settings
- `modules/` - Modular components
- `locales/` - Localization files

## Building for Production

1. Build the web assets:
   ```bash
   cd web
   yarn build   # or npm run build
   ```
2. The built files will be available in `web/build/`

## Dependencies

### Frontend
- React
- Mantine UI
- TypeScript
- Vite

### Backend
- ox_lib
- es_extended (ESX)
- oxmysql

## License

MIT License

## Author

Created by huh

## Credit

Credit to original repo: https://github.com/SYNO-SY/Fivem-React-Mantine-Template
