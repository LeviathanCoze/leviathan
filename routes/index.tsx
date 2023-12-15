import { useSignal } from "@preact/signals";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#4762b5]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/leviathan.png"
          width="128"
          height="128"
          alt="the Levithan logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Levithan</h1>
      </div>
    </div>
  );
}
