import BGPatternDemo from "@/components/ui/bg-pattern-demo";

const BGPatternDemoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Background Pattern Components</h1>
          <p className="text-muted-foreground text-lg">
            Explore different background patterns with various mask effects
          </p>
        </div>
        <BGPatternDemo />
      </div>
    </div>
  );
};

export default BGPatternDemoPage;