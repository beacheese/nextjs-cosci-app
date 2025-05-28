import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Features05PageProps = {
  courses: any[]
};

const Features05Page = ({courses}: Features05PageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
          Our Course
        </h2>
        <div className="mt-8 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none"
            >
              <CardHeader>
                <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                  {course.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {course.detail}
                </p>
                <p>
                  {course.date}
                </p>
                <p>
                  {course.view}
                </p>
                <p>
                  {course.picture}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="bg-muted h-40 ml-6 rounded-tl-xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features05Page;
