"use client"
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
import { Skeleton } from "@/components/ui/skeleton";
import { VehicleMake, VehicleModel, VehicleVariant } from "@/types";
import { useEffect, useState } from "react";
import MakesPage from "./(routes)/Makes/page";
import ModelsPage from "./(routes)/Models/page";
import VariantsPage from "./(routes)/Variants/page";

interface WhitebookProps {
  name: string;
  data: VehicleMake[] | VehicleModel[] | VehicleVariant[];
}

type TableType = "MakesPage" | "ModelsPage" | "VariantsPage";

const HomePage = () => {

  const [whitebook, setWhitebook] = useState<WhitebookProps[]>([]);
  const [table, setTable] = useState<TableType>("MakesPage");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const makes = await getMakes();
      const models = await getModels();
      const variants = await getVariants();

      const data = [
        {
          name: "Makes",
          data: makes,
        },
        {
          name: "Models",
          data: models,
        },
        {
          name: "Variants",
          data: variants,
        },
      ];

      setWhitebook(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const renderTable = () => {
    switch (table) {
      case "MakesPage":
        return <MakesPage />;
      case "ModelsPage":
        return <ModelsPage />;
      case "VariantsPage":
        return <VariantsPage />;
      default:
        return null;
    }
  };


  return (
    <div className="flex items-center justify-center flex-col">
      <section>
        <div className="container mx-auto p-4 flex justify-between items-center top-0 mt-20">
          <h1 className="text-2xl font-bold">Whitebook Dashboard</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {loading ? (
            <>
              <Skeleton className="w-64 h-60" />
              <Skeleton className="w-64 h-60" />
              <Skeleton className="w-64 h-60" />
            </>
          ) : (
            whitebook.map((book) => (
              <Card key={book.name}>
                <CardHeader>
                  <CardTitle>{book.name}</CardTitle>
                  <CardDescription>Total number of {book.name.toLowerCase()}s</CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <Skeleton className="h-8 w-20" />
                  ) : (
                    <p className="text-4xl font-bold">{book.data.length}</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => setTable(`${book.name}Page` as TableType)}>
                      View {book.name}
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
        <Card>
            <CardHeader>
              <CardTitle>Vehicle Data</CardTitle>
              <CardDescription>Detailed list of all vehicle makes, variants, and models</CardDescription>
            </CardHeader>
            <CardContent>
              {renderTable()}
            </CardContent>
        </Card>
      </section>
      </div>
  );
}

export default HomePage;