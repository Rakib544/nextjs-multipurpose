import { cn } from "@/lib/utils";

interface CallToActionProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CallToActionHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}
interface CallToActionSubHeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
interface CallToActionLinks extends React.HTMLAttributes<HTMLDivElement> {}

const CallToAction = ({ className, children, ...props }: CallToActionProps) => {
  return (
    <div
      className={cn(
        " mb-10  md:max-w-3xl mx-auto px-0 sm:px-6 md:px-4  lg:max-w-7xl lg:px-14",
        className
      )}
      {...props}
    >
      <div
        className="bg-indigo-600 py-16 sm:py-28 md:py-32 sm:rounded-3xl relative bg-cover bg-center"
        style={{
          backgroundImage: `url(https://www.devsnews.com/template/sasup-prev/sasup/assets/img/bg/cta-1.webp)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const CallToActionHeading = ({
  className,
  ...props
}: CallToActionHeadingProps) => {
  return (
    <h4
      className={cn(
        "block text-center [text-wrap:balance] leading-10 text-xl md:text-2xl lg:text-4xl max-w-2xl mx-auto font-extrabold text-neutral-50 mb-2",
        className
      )}
      {...props}
    />
  );
};

const CallToActionSubHeading = ({
  className,
  ...props
}: CallToActionSubHeadingProps) => {
  return (
    <p
      className={cn(
        "text-neutral-200 max-w-xl mx-auto text-center leading-8 mt-4",
        className
      )}
      {...props}
    />
  );
};

const CallToActionMenus = ({ className, ...props }: CallToActionLinks) => {
  return (
    <div
      className={cn("flex justify-center gap-x-2 mt-6", className)}
      {...props}
    />
  );
};

export {
  CallToAction,
  CallToActionHeading,
  CallToActionMenus,
  CallToActionSubHeading,
};
