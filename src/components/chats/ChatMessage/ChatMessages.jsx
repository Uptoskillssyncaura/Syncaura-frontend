import MessageBubble from "../MessageBubble";

export default function ChatMessages() {
  return (
    <div className="relative flex-1 overflow-hidden h-full">
 

  <div className="relative flex-1 overflow-y-auto p-4 z-20">
    <div className="flex justify-center mb-4">
      <span className="text-sm font-semibold bg-[#C5D7FF] text-[#1C1C1C] dark:text-[#E0E0E0] dark:bg-[#408485] px-3 py-1 rounded-full">
        Today
      </span>
    </div>

    <MessageBubble text="Hey bro, you free ah? Need to ask something." />
    <MessageBubble text="Ya I'm free. What do you want to ask?" isOwn />
  </div>
</div>

  );
}
