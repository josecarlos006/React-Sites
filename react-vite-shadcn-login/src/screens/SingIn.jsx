import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import pagesImage from "@/assets/pages-image.svg"
import computerImage from "@/assets/computer-image.svg"


export function SingIn() {
  return (
    <main className="h-screen flex w-full">
      <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
        <Carousel className="w-full max-w-xl">
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src={computerImage} alt="Imagem computador" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src={pagesImage} alt="Imagem computador" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">
              Entre com sua conta
            </CardTitle>
            <CardDescription>
              Ultilize seu email e senha ou o GitHub para entrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <label htmlFor="email">E-mail</label>
              <Input id="email" placeholder="example@email.com" type="email" />
            </div>
            <div className="mt-4">
              <label htmlFor="password">Senha</label>
              <Input id="password" placeholder="Sua senha secreta" type="password" />
            </div>
            <Button className="mt-6 w-full">Entrar</Button>
            <div className="flex items-center gap-6 mt-4">
              <Separator />
              <span className="text-xs text-muted-foreground">OU</span>
              <Separator />
            </div>
            <Button variant="outline" className="mt-4 w-full"><GitHubLogoIcon className="mr-2" />Entrar com o GitHub</Button>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-center text-sm">Ao entrar em nossa plataforma você concorda com nossos Termos de Uso e Política de Privacidade</p>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}
