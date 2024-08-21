interface GraphProps {
  heading: string;
  description: string;
  plotlyEmbedUrl: string;
  height: number;
}

const Graph = (props: GraphProps) => {
  const { heading, description, plotlyEmbedUrl, height } = props;

  return (
    <div
      className="flex flex-col gap-4"
    >
      <h2>
        {heading}
      </h2>

      <p>
        {description}
      </p>

      <div
        className="w-full items-center justify-between font-mono text-sm lg:flex z-10 h-full"
      >
        <iframe
          id="igraph"
          scrolling="no"
          style={{border: "none"}}
          seamless
          src={`${plotlyEmbedUrl}?autosize=true&link=false&modebar=false&theme=light`}
          height={height}
          width="100%"
        />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-6 gap-6">
        <Graph
          heading="Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          purus non nunc posuere blandit. Donec ut neque nec nisl aliquet
          ultricies. Integer sit amet mi nec purus tincidunt ultricies. Nam
          posuere, purus nec tincidunt ultricies, elit ex fermentum eros, ac
          iaculis turpis mi nec metus. Nullam nec purus non nunc posuere blandit.
          Donec ut neque nec nisl aliquet ultricies. Integer sit amet mi nec purus
          tincidunt ultricies. Nam posuere, purus nec tincidunt ultricies, elit ex
          fermentum eros, ac iaculis turpis mi nec metus."
          plotlyEmbedUrl="https://chart-studio.plotly.com/~hpnkv/1.embed"
          height={720}
        />

        <Graph
          heading="Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          purus non nunc posuere blandit. Donec ut neque nec nisl aliquet
          ultricies. Integer sit amet mi nec purus tincidunt ultricies. Nam
          posuere, purus nec tincidunt ultricies, elit ex fermentum eros, ac
          iaculis turpis mi nec metus. Nullam nec purus non nunc posuere blandit.
          Donec ut neque nec nisl aliquet ultricies. Integer sit amet mi nec purus
          tincidunt ultricies. Nam posuere, purus nec tincidunt ultricies, elit ex
          fermentum eros, ac iaculis turpis mi nec metus."
          plotlyEmbedUrl="https://chart-studio.plotly.com/~hpnkv/8.embed"
          height={720}
        />

        <Graph
          heading="Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          purus non nunc posuere blandit. Donec ut neque nec nisl aliquet
          ultricies. Integer sit amet mi nec purus tincidunt ultricies. Nam
          posuere, purus nec tincidunt ultricies, elit ex fermentum eros, ac
          iaculis turpis mi nec metus. Nullam nec purus non nunc posuere blandit.
          Donec ut neque nec nisl aliquet ultricies. Integer sit amet mi nec purus
          tincidunt ultricies. Nam posuere, purus nec tincidunt ultricies, elit ex
          fermentum eros, ac iaculis turpis mi nec metus."
          plotlyEmbedUrl="https://chart-studio.plotly.com/~hpnkv/11.embed"
          height={720}
        />

        <div className="flex flex-col gap-4">
          <h2>Lorem4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus non nunc posuere blandit. Donec ut neque nec nisl aliquet
            ultricies. Integer sit amet mi nec purus tincidunt ultricies. Nam
            posuere, purus nec tincidunt ultricies, elit ex fermentum eros, ac
            iaculis turpis mi nec metus. Nullam nec purus non nunc posuere blandit.
            Donec ut neque nec nisl aliquet ultricies. Integer sit amet mi nec purus
            tincidunt ultricies. Nam posuere, purus nec tincidunt ultricies, elit ex
            fermentum eros, ac iaculis turpis mi nec metus.
          </p>
          <iframe src='https://flo.uri.sh/visualisation/19074068/embed' title='Interactive or visual content'
                  className='flourish-embed-iframe' frameBorder='0' scrolling='no' style={{width: '100%', height: 720}}
                  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <div
            style={{width: '100%', marginTop: '4px', textAlign: 'right'}}
          ><a className='flourish-credit'
               href='https://public.flourish.studio/visualisation/19074068/?utm_source=embed&utm_campaign=visualisation/19074068'
               target='_top'
               style={{textDecoration: 'none'}}><img
            alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg'
            style={{width: '105px', height: '16px', border: 'none', margin: '0'}}/> </a></div>
        </div>


      </main>
    </>

  )
    ;
}
