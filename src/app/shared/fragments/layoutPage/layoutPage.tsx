import Typography from '@/shared/components/typography/typography';
interface LayoutProps {
  children: React.ReactNode;
}
export default function LayoutPage(props: LayoutProps) {
  const { children } = props;
  return (
    <section className="bg-background h-screen w-full">
      <header className="bg-header-blue py-2.5 px-5 rounded-t-round-30px">
        <Typography type="H2" className={['text-white']} title="To Do" />
      </header>
      <main className="bg-background-main h-screen w-full rounded-b-round-30px pt-12.5 flex justify-center px-4 md:px-0">
        {children}
      </main>
    </section>
  );
}
