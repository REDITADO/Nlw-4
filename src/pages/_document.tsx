import Document, {Html,Head, Main, NextScript} from 'next/document'
export default class myDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                <link rel="shrtcut icon" type='img/png' href="favicon.png"/>

                <script data-ad-client="ca-pub-7161757588420532" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
    
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        )
    }
}