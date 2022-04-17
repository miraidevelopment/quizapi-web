import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
      <>
        <Head>

            <title>Quiz API</title>

            <meta charSet="utf-8" />
            <meta name="language" content="pt-BR" />
            <meta name="robots" content="all" />
            <meta property="og:type" content="page" />
            <meta property="article:author" content="Mirai Development" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@quizapi.quizapi.site" />
            <meta name="twitter:title" content="QuizAPI" />
            <meta name="twitter:creator" content="@guihrib" />
            <meta name="twitter:description" content="Uma API de Questões e Respostas para seu bot do Discord e WebSite, 100% em português e fácil de usar" />
            <meta name="theme-color" content="#FFC927" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#FFC927" />
            <meta name="msapplication-navbutton-color" content="#FFC927" />
            <meta name="author" content="Mirai Development" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content="quiz-api quiz api questões gr mutano mirai-development development mirai" />
            <meta property="og:image" content="/QuizLogo.png" />
            <meta property="og:site_name" content="QuizAPI" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://quizapi.site/" />
            <meta name="description" content="Uma API de Questões e Respostas para seu bot do Discord e WebSite, 100% em português e fácil de usar" />
            <meta property="og:title" content="QuizAPI・Site" />
            <meta property="og:description" content="Uma API de Questões e Respostas para seu bot do Discord e WebSite, 100% em português e fácil de usar" />
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
            <link rel="icon" href="https://cdn.discordapp.com/attachments/929747405916733460/934403289905250304/AoiFB_Logo.png" type="image/x-icon" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="/bob.css" />
            <link rel="stylesheet" href="/body.css" />
            <link rel="stylesheet" href="/table.css" />
            <link rel="stylesheet" href="/cards.css" />
            <link rel="stylesheet" href="/counter.css" />
            <link rel="stylesheet" href="/colors.css" />
            <link rel="stylesheet" href="/a.css" />
            <link rel="icon" href="/QuizLogo.png" />

        </Head>
        
        <div className="div1" >

            <Script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></Script>
            <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></Script>

            <nav className="navbar navbar-expand-lg navbar-light nav1">
                <a className="navbar-brand" href="">
                    <Image src="/QuizLogo.png" width={30} height={30} className="rounded d-inline-block align-top" />
                    <div className="divAoifb1">
                        QuizAPI
                    </div>
                </a>
            </nav>

            <div id="initial_bar" className="initialBar"></div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="tableModel">
                <center>
                    <div className="bob">
                        <Image src="/QuizLogo.png" width={100} height={100} alt="..." className="rounded-circle bobShaddow123" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h2 className="card-title cardTitle1"><strong>Quiz API</strong></h2>
                    <h2 className="card-title cardTitle2"><strong>Uma API de Questões e Respostas para seu bot do Discord e WebSite, 100% em português e fácil de usar</strong></h2>
                </center>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
      </>
  )
}