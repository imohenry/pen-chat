import { User } from 'firebase/auth';

export default function ChatRoom({ user }: { user: User }) {
    return (
      <div>
        <p className="text-gray-700">Welcome, {user.displayName}</p>
        {/* Messages and message input goes here */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="border rounded p-2 w-full"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Send
          </button>
      </div>
      </div>
    );
  }