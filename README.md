# Crowdfunding Dashboard 

## Overview

This project is a **decentralized crowdfunding platform** built on **Thirdweb** and **Ethereum (Sepolia testnet)**. It allows users to **create, deploy, and manage crowdfunding campaigns** directly from the dashboard. 
---

## Features

1. **Dashboard**
   - Displays a list of campaigns created by the connected user.
   - Allows users to easily navigate between campaigns.

2. **Campaign Creation**
   - Users can create a new crowdfunding campaign via a modal form.
   - Campaign parameters include:
     - Name
     - Description
     - Funding Goal
     - Campaign Length (in days)
 

3. **Smart Contract Deployment**
   - Uses **Thirdweb’s `deployPublishedContract`** to deploy a new crowdfunding contract per campaign.
   - Contracts are deployed from a Crowdfunding Factory.
   - Includes all campaign metadata, including the video URL.

4. **User Campaigns**
   - Displays campaigns created by the currently connected wallet.
   - Uses Thirdweb hooks (`useReadContract`) to fetch campaigns from the factory contract.

---

## Tech Stack

- **Frontend**: React + Next.js (`'use client'`)
- **Blockchain SDK**: Thirdweb, Solidity
- **Smart Contracts**: Crowdfunding contract published on Thirdweb
- **Storage (for videos)**: Can be integrated with IPFS / NFT.storage / Web3.Storage
- **Styling**: Tailwind CSS

---

## Folder Structure

