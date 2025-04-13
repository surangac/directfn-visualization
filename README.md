# DirectFN Market Data Visualization

An interactive visualization of DirectFN's market data infrastructure, data flow, and global coverage. This project showcases the journey of financial data from global exchanges through the DirectFN Market Data Backend to various client applications.

![DirectFN Market Data Visualization](https://github.com/surangac/directfn-visualization/raw/main/public/screenshot.png)

## Features

- Interactive data flow visualization with animated particles
- Global data centers network with connected exchanges
- Products and clients overview
- Team structure visualization
- Responsive design with Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher, included with Node.js)

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/surangac/directfn-visualization.git
cd directfn-visualization
```

### 2. Install dependencies

```bash
npm install
```

This will install all the required dependencies including:
- React (v19)
- React DOM
- React Scripts
- Tailwind CSS
- Lucide React (for icons)
- Other development dependencies

### 3. Start the development server

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
directfn-visualization/
├── public/                  # Static files
├── src/                     # Source files
│   ├── components/          # React components
│   │   ├── common/          # Common UI components
│   │   ├── dataFlow/        # Data flow related components
│   │   └── views/           # Main view components
│   ├── App.js               # Main application component
│   └── index.js             # Application entry point
├── package.json             # Project dependencies and scripts
└── tailwind.config.js       # Tailwind CSS configuration
```

## Key Components

- **MarketDataFlow.js**: Main component that integrates all views with tab navigation
- **DataFlowView.js**: Visualizes the data flow from exchanges to clients
- **CoverageView.js**: Shows the global coverage and market data statistics
- **ClientsView.js**: Displays products and client information
- **TeamView.js**: Showcases the team structure and expertise
- **EnhancedGlobalDataCenters.js**: Interactive visualization of global data centers

## Tailwind CSS

This project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`. Tailwind classes are used directly in the component JSX for styling.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

This creates an optimized production build in the `build` folder that can be deployed to any static hosting service.

## Browser Compatibility

The application is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

If you encounter any issues:

1. **Blank page after npm start**: This could be due to React version compatibility. Make sure you're using Node.js v18+ and that the React DOM rendering method in index.js uses createRoot (for React 18+).

2. **Animation issues**: If animations aren't working, check if your browser supports the CSS features used.

3. **Development environment issues**: Try clearing your npm cache and node_modules:
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you're not satisfied with the build tool and configuration choices, you can `eject` at any time.

## License

[MIT](LICENSE)
