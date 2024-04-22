import Image from "next/image";
import { Container } from "./container";
import { List, ListItem } from "./list";
import { SectionIntro } from "./section-intro";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function UseCases() {
  return (
    <div className="bg-primary py-20 md:py-32 mt-20 md:mt-32">
      <Container>
        <SectionIntro
          invert
          title="Software was designed for many use cases"
          eyebrow="Use case"
          className="mb-12"
        >
          Well everything you need if you aren’t that picky about minor details
          like tax compliance.
        </SectionIntro>
        <Tabs className="" defaultValue="tab-1">
          <TabsList className="bg-transparent justify-start md:justify-center gap-x-6 h-auto overflow-x-auto">
            <TabsTrigger
              value="tab-1"
              className="py-3 text-lg !text-gray-300 border-primary data-[state=active]:border-indigo-500"
            >
              Engineering Teams
            </TabsTrigger>

            <TabsTrigger
              value="tab-2"
              className="py-3 text-lg !text-gray-300 border-primary data-[state=active]:border-indigo-500"
            >
              Marketing Teams
            </TabsTrigger>

            <TabsTrigger
              value="tab-3"
              className="py-3 text-lg !text-gray-300 border-primary data-[state=active]:border-indigo-500"
            >
              Design Teams
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-14">
              <div>
                <h4 className="text-2xl font-bold text-white">
                  Software for Engineering Teams
                </h4>
                <p className="text-base leading-8 mt-3 text-gray-300">
                  Well everything you need if you aren’t that picky about minor
                  details like tax compliance.
                </p>
                <List className="mt-4">
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                </List>
              </div>
              <div>
                <div className="aspect-video relative">
                  <Image
                    src="https://assets-global.website-files.com/5fbd60e9c0e04c6e2ff0c2e0/5fc7f23896174f2e7631b05e_image-feature-tab-1-software-ui-kit.png"
                    alt=""
                    fill
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-14">
              <div>
                <h4 className="text-2xl font-bold text-white">
                  Software for Marketing Teams
                </h4>
                <p className="text-base leading-8 mt-3 text-gray-300">
                  Well everything you need if you aren’t that picky about minor
                  details like tax compliance.
                </p>
                <List className="mt-4">
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                </List>
              </div>
              <div>
                <div className="aspect-video relative">
                  <Image
                    src="https://assets-global.website-files.com/5fbd60e9c0e04c6e2ff0c2e0/5fc7f23896174f2e7631b05e_image-feature-tab-1-software-ui-kit.png"
                    alt=""
                    fill
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-14">
              <div>
                <h4 className="text-2xl font-bold text-white">
                  Software for Design Teams
                </h4>
                <p className="text-base leading-8 mt-3 text-gray-300">
                  Well everything you need if you aren’t that picky about minor
                  details like tax compliance.
                </p>
                <List className="mt-4">
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                  <ListItem invert>
                    Detailed financial data and insights at your fingertips.
                  </ListItem>
                </List>
              </div>
              <div>
                <div className="aspect-video relative">
                  <Image
                    src="https://assets-global.website-files.com/5fbd60e9c0e04c6e2ff0c2e0/5fc7f23896174f2e7631b05e_image-feature-tab-1-software-ui-kit.png"
                    alt=""
                    fill
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
}
