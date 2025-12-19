# Contributing to Agricultural Trading System

Thank you for your interest in contributing to the Agricultural Trading System! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/AGRICULTURAL_TRADING_SYSTEM.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Open a Pull Request

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (local or Atlas)

### Installation

1. Install all dependencies:
   ```bash
   npm run install:all
   ```

2. Set up environment variables:
   - Create a `.env` file in the `BACKEND` directory
   - Add your MongoDB connection string and port

3. Start the development servers:
   ```bash
   npm run dev
   ```

## Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Write self-documenting code

## Commit Messages

- Use clear and descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Keep the first line under 50 characters
- Add more details in the body if needed

Examples:
- `Add product search functionality`
- `Fix MongoDB connection issue`
- `Update README with installation instructions`

## Pull Request Process

1. Ensure your code follows the project's style guidelines
2. Make sure all tests pass (if applicable)
3. Update the README.md if you've changed functionality
4. Add comments to your code where necessary
5. Ensure your branch is up to date with the main branch
6. Submit your pull request with a clear description

## Reporting Bugs

If you find a bug, please create an issue with:
- A clear title and description
- Steps to reproduce the bug
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (OS, Node version, etc.)

## Feature Requests

We welcome feature requests! Please create an issue with:
- A clear description of the feature
- Why this feature would be useful
- Any potential implementation ideas

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing! 🚀
