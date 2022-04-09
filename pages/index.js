import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
      <>
        <Head>

            <title>AoiFB</title>

            <meta charset="utf-8" />
            <meta name="language" content="pt-BR" />
            <meta name="robots" content="all" />
            <meta property="og:type" content="page" />
            <meta property="article:author" content="Database" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@aoifb.quizapi.site" />
            <meta name="twitter:title" content="Aoi.FB" />
            <meta name="twitter:creator" content="@guihrib" />
            <meta name="twitter:description" content="A Firebase database of wrapper using aoi.db as API" />
            <meta name="theme-color" content="#1aff17" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#1aff17" />
            <meta name="msapplication-navbutton-color" content="#1aff17" />
            <meta name="author" content="guih rib" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content="aoi db dbd aoijs aoi.js aoi.fb aoifb aoi.db aoidb dbdjs dbd.js firebase database" />
            <meta property="og:image" content="https://cdn.discordapp.com/attachments/929747405916733460/934403289905250304/AoiFB_Logo.png" />
            <meta property="og:site_name" content="Database" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://aoifb.quizapi.site/" />
            <meta name="description" content="A Firebase database of wrapper using aoi.db as API" />
            <meta property="og:title" content="Mutano™・Convite" />
            <meta property="og:description" content="A Firebase database of wrapper using aoi.db as API" />
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
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
            <link rel="icon" href="/favicon.ico" />

        </Head>
        
        <div class="div1">

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

            <nav class="navbar navbar-expand-lg navbar-light nav1">
                <a class="navbar-brand" href="">
                    <img src="https://cdn.discordapp.com/attachments/929747405916733460/934403289905250304/AoiFB_Logo.png" width="30" height="30" class="rounded d-inline-block align-top" alt="" />
                    <div class="divAoifb1">
                        Aoi.FB
                    </div>
                </a>
            </nav>

            <div id="initial_bar" class="initialBar"></div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div class="tableModel">
                <center>
                    <div class="bob">
                        <img src="https://cdn.discordapp.com/attachments/929747405916733460/934403289905250304/AoiFB_Logo.png" alt="..." class="rounded-circle bobShaddow123" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h2 class="card-title cardTitle1"><strong>Aoi.FB</strong></h2>
                    <h2 class="card-title cardTitle2"><strong>A Firebase database of wrapper using aoi.db as API</strong></h2>
                </center>
            </div>

            <br />
            <br />

            <div class="tableModel">
                <center>
                    <a href="/" target="_black">
                        <button type="button" class="btn tableRedirect">You are beingredirected...</button>
                    </a>
                </center>
            </div>

            <br />
            <br />

            <Script>
                {`
                    setTimeout(function() {
                        window.location.href="https://www.npmjs.com/package/aoi.fb#about"
                    }, 3000);
                `}
            </Script>
        </div>
      </>
  )
}
