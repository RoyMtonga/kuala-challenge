import getMakes from "@/actions/get-makes";
import getModels from "@/actions/get-models";
import getVariants from "@/actions/get-variant";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";


const HomePage = async () => {
  const makes = await getMakes();
  const models = await getModels();
  const variants = await getVariants()

  const whitebook = [
    {
      name: "Makes",
      data: makes
    },
    {
      name: "Models",
      data: models
    },
    {
      name: "Variants",
      data: variants
    }
]
  return (
    <div className="h-screen flex">
      <div className="flex flex-col m-auto gap-y-10">
        <div className="text-black text-2xl text-center">
          <p>
            Manage Vehicle White Books In One Place.....
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-3">
          {whitebook.map((book) => (
            <Card key={book.name}>
              <CardHeader>
                <CardTitle>{book.name}</CardTitle>
                <CardDescription>Manage all Vehicle {book.name} </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex justify-center gap-3 h-16">
                <span className="text-muted-foreground">{book.data.length}</span> <span >{book.name}</span>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link href={`/${book.name}`}>
                    Manage {book.name}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;