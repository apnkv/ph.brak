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
          style={{ border: "none" }}
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


        <h1>Связность участников брака до пх</h1>

        <div className="flex flex-col gap-4">
          <h2>Граф пре-пх</h2>
          <p>
            Текст от Насти Арбузовой... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.
          </p>
          <iframe src='https://flo.uri.sh/visualisation/19074068/embed' title='Interactive or visual content'
            className='flourish-embed-iframe' frameBorder='0' scrolling='no' style={{ width: '100%', height: 720 }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <div
            style={{ width: '100%', marginTop: '4px', textAlign: 'right' }}
          ><a className='flourish-credit'
            href='https://public.flourish.studio/visualisation/19074068/?utm_source=embed&utm_campaign=visualisation/19074068'
            target='_top'
            style={{ textDecoration: 'none' }}><img
                alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg'
                style={{ width: '105px', height: '16px', border: 'none', margin: '0' }} /> </a></div>
        </div>

        <h1>Анализ сообщений в чате пх</h1>
        <Graph
          heading="Количество сообщений"
          description="Мы проанализировали количество сообщений в чате пх на момент до 11 августа 2024 года. 
          Всего в чате пх было отправлено 84467 сообщений, из которых 33419 сообщений были отправлены 33 брачующимися.
          На графике ниже представлено общее количество сообщений в чате пх для участников брака."
          plotlyEmbedUrl="https://chart-studio.plotly.com/~hpnkv/1.embed"
          height={720}
        />

        <Graph
          heading="Количество сообщений по годам"
          description="На графике ниже представлено количествоо сообщений по годам для участников брака суммарно."
          plotlyEmbedUrl="https://chart-studio.plotly.com/~hpnkv/23.embed"
          height={720}
        />

        <Graph
          heading="Количество сообщений по годам и участникам"
          description="График интерактивный и вы можете выбрать участника для отображения. 
          Если кликнуть дважды по имени, выделится только этот брачующийся."
          plotlyEmbedUrl="https://chart-studio.plotly.com/~hpnkv/8.embed"
          height={720}
        />

        <Graph
          heading="Количество сообщений по дням"
          description="Этот график можно приближать, чтобы увидеть пики распределения. Можно найти интересные инсайты."
          plotlyEmbedUrl="https://chart-studio.plotly.com/~hpnkv/25.embed"
          height={720}
        />

        <Graph
          heading="Количество сообщений по дням и участникам"
          description="Аналогично, этот график можно приближать и выбирать участника для отображения. 
          Если кликнуть дважды по имени, выделится только этот брачующийся. "
          plotlyEmbedUrl="https://chart-studio.plotly.com/~hpnkv/11.embed"
          height={720}
        />

        <Graph
          heading="Самые популярные слова в чате пх"
          description="На этом графике представлены слова, которые использовались брачующимися более 300 раз в чате пх. 
          Слова в распределении почищены от предлогов и стоп-слов при помощи библиотеки nltk."
          plotlyEmbedUrl="https://chart-studio.plotly.com/~hpnkv/20.embed"
          height={720}
        />

        <h1>Связность участников брака в пх</h1>

        <div className="flex flex-col gap-4">
          <h2>Граф в пх</h2>
          <p>
            Этот график показывает связность участников брака в пх.
            Между участниками проведено ребро, если в течение 1 часа в чате пх эти оба участника отправили сообщения.
            Толщина ребра показывает количество таких переписов между участниками.
            Можно заметить, что некоторые супруги так и не общались между собой до брака.
          </p>
          <iframe src='https://flo.uri.sh/visualisation/19150588/embed' title='Interactive or visual content'
            className='flourish-embed-iframe' frameBorder='0' scrolling='no' style={{ width: '100%', height: 720 }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
          <div
            style={{ width: '100%', marginTop: '4px', textAlign: 'right' }}
          ><a className='flourish-credit'
            href='https://public.flourish.studio/visualisation/19150588/?utm_source=embed&utm_campaign=visualisation/19074068'
            target='_top'
            style={{ textDecoration: 'none' }}><img
                alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg'
                style={{ width: '105px', height: '16px', border: 'none', margin: '0' }} /> </a></div>
        </div>

      </main>
    </>

  )
    ;
}
