import { User2, User2Icon, UserCircle2, UserIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <header>
        <div className="w-full px-32 py-3 gap-10 flex items-center justify-between text-black">
          
          <div className="flex gap-2">
            <div>LOGO</div>            
          </div>

          <div className="flex gap-8">
            <div>
              <a href="#">Parcerias</a>
            </div>
            <div>
              <a href="#">Blog</a>
            </div>
            <div>
              <a href="#">Sobre nós</a>
            </div>
            <div>
              <a href="#">Fale conosco</a>
            </div>
            <div className="flex gap-4">
              <UserIcon className="size-5" />
              <a href="#">Login</a>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className="font-semibold text-[64px] text-black items-center">
          Soluções em <strong className="bg-cyan-300 z-10 rounded-full">climatização</strong> pensadas <p>para você</p>
        </h1>
        <h2 className="font-Oscine text-[40px] text-black leading-[48px]">Seguros com tecnologia, rapidez e zero burocracia. Prevenção a poucos cliques de distância.</h2>
      </div>
    </>
  );
}
