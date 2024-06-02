Sure, here's a detailed README file for your project:

---

# iMessage Clone

An iOS-inspired messaging web application built using Next.js for the frontend and the backend, Node.js for Server side Runtime Environment and various other modern web technologies. This application provides real-time messaging, authentication via Google and GitHub, and several other features to enhance the user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time messaging**: Send and receive messages in real-time.
- **Authentication**: Login and signup using Google and GitHub.
- **User status**: See who is currently active or offline.
- **Read receipts**: Real-time message seen notifications.
- **Group chats**: Create and chat in groups.
- **Profile management**: Change profile pictures.
- **Message management**: Delete messages.

## Technologies Used

- **Frontend & Backend**: Next.js,Node.js, TypeScript
- **Authentication**: NextAuth.js (Google and GitHub providers)
- **Database**: MongoDB
- **Real-time functionality**: Pusher
- **Styling**: Tailwind CSS
- **State Management**: Redux (or any other state management library if used)

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/sagarmaiti26/iMessage.git
   cd iMessage
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the following variables:
   ```sh
   NEXT_PUBLIC_PUSHER_KEY=your_pusher_key
   NEXT_PUBLIC_PUSHER_CLUSTER=your_pusher_cluster
   MONGODB_URI=your_mongodb_uri
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the development server**:
   ```sh
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to see the application in action.

## Configuration

- **Pusher**: Sign up for a Pusher account and create a new app to get your `PUSHER_KEY` and `PUSHER_CLUSTER`.
- **MongoDB**: Use MongoDB Atlas or a local MongoDB instance to set up your database. Replace `your_mongodb_uri` with the connection string.
- **NextAuth**: Configure Google and GitHub authentication by setting up OAuth apps in their respective developer consoles. Replace the placeholders in `.env.local` with your actual client IDs and secrets.

## Usage

- **Login/Signup**: Use Google or GitHub to sign in.
- **Send Messages**: Start a chat with other users or create a group chat.
- **Profile Management**: Update your profile picture and personal information.
- **Real-time Updates**: See when messages are read and who is currently online.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Feel free to customize this README file according to your project's specifics.
