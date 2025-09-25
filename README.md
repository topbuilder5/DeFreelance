# 🌍 Leavon – DeFreelance

Leavon is a the World's first decentralized freelance platform built on blockchain technologies.
The platform’s purpose is to connect clients and freelancers globally, allowing them to collaborate, hire, and get paid in cryptocurrency — eliminating intermediaries and enabling instant, transparent transactions.

## 🖼️ Screenshots

### Main Dashboard
![Dashboard](/public/MainDashboard.png)

### Contract Creation
![Contract Creation](/public/JobCreation.png)

### Milestone Management
![Milestone Management](/public/MilestoneManagement.png)

### Payment Processing
![Payment Processing](/public/PaymentProcessing.png)

## 🔗 Blockchain Integration & Feature

Unlike existing platforms such as Upwork, Fiverr, or Freelancer, DeFreelance will rely on smart contracts to manage all critical functions: escrow, payment release, dispute resolution, and reputation — all governed in a decentralized fashion

1. **Decentralization**
   Remove dependency on centralized platforms for control and trust.

2. **Crypto Payments & Escrow**
   All client-freelancer transactions happen in cryptocurrency, held in escrow smart contracts until work is approved.

3. **Immutable Reputation System**
   Feedback, ratings, profiles and other relevant professional data stored in a verifiable form on the blockchain.

4. **Global Access & Low Friction:**
   No banking delays or geography restrictions; minimal fees; borderless interaction.

5. **Security, Transparency, & Trust**
   Smart contracts enforce agreements; blockchain records are auditable and tamper-proof.


## 🎥 Project Walkthrough

[![Project Walkthrough](https://img.youtube.com/vi/Yb-Z5llxOk0/0.jpg)](https://www.youtube.com/watch?v=Yb-Z5llxOk0)

In this comprehensive walkthrough, we cover:
- Project architecture and codebase structure
- Smart contract implementation details
- Frontend development and UI/UX decisions
- Testing and deployment process
- Future roadmap and improvements
- Passkey kit integration and smart wallet features

## 🚀 Features

- **Smart Contract Escrow**: Secure funds in smart contracts
- **Milestone-based Payments**: Automate payments based on work completion
- **Multicurrency Support**: Use stablecoins for cross-border payments
- **Identity & Reputation**: Optional KYC and on-chain ratings
- **Modern UI/UX**: Clean, intuitive interface built with React and Tailwind CSS
- **Passkey Authentication**: Secure and convenient login using passkeys
- **Smart Wallet Integration**: Enhanced wallet functionality with smart contract capabilities

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Smart Contracts**: Solidity, using Hardhat or Foundr
- **Wallet Integration**: MetaMask, WalletConnect
- **UI Components**: Headless UI + Heroicons
- **Routing**: React Router

## 🏗️ Project Structure

```
├── new_build/                 # Rust-based Soroban smart contracts
│   ├── Cargo.toml
│   └── src/
├── frontend/                  # React + TypeScript frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
├── scripts/                   # Deployment and utility scripts
├── .gitignore
├── README.md
└── LICENSE
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone 
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Development



### Available Scripts

- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm lint`: Run linter

## 📝 Smart Contract Integration

The platform uses smart contracts for escrow functionality. Key features:

- Funds are locked in escrow until milestone completion
- Automatic payment release upon milestone approval
- Dispute resolution mechanism (coming in v2)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


