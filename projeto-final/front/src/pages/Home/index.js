import React from 'react';
import Navbar from '../../components/Navbar';
import Menu from '../../components/Menu';
import Carousel from '../../components/Carousel';
import ColecoesDestaque from '../../components/ColecoesDestaque';
import Produto from '../../components/Produto';
import { Stack } from '@mui/system';
import { Container, Grid } from '@mui/material';
import Footer from '../../components/Footer';

export default function Home() {

    const [listaProdutos, setListaProdutos] = React.useState([]);
    function buscarProdutos(){
        // fetch("https://63388a25383946bc7fe9a891.mockapi.io/digital-store-users")
        //     .then(res => res.json())
        //     .then(lista => {
        //         setListaProdutos(lista);
        //     });
        setListaProdutos([
            {
                nome: "primeiro produto",
                preco: "299",
                categoria: "sapato",
                imgUrl: "",
                desconto: "15%"
            },
            {
                nome: "segundo produto",
                preco: "299",
                categoria: "sapato",
                imgUrl: "",
                desconto: null
            },
            {
                nome: "terceiro produto",
                preco: "299",
                categoria: "sapato",
                imgUrl: "",
                desconto: "50%"
            }
            
        ])
    }   
    React.useEffect(() => {
        buscarProdutos();
    }, [])

    return (
        <>
            <Navbar />
            <Menu />
            <Carousel />
            <ColecoesDestaque />
            <Container>
                <Grid container spacing={3}>
                    {/* {
                        listaProdutos.map((cadaProduto, index) => {
                            return(
                                <Grid key={index} item md={3}>
                                    <Produto 
                                        nome={cadaProduto.nome} 
                                        categoria={cadaProduto.categoria} 
                                        imagem={cadaProduto.imgUrl}
                                        desconto={cadaProduto.desconto} />
                                </Grid>
                            );
                        })
                    } */}
                    <Grid item md={3}>
                        <Produto 
                            nome={"sapato"} 
                            categoria={"sapatos"} 
                            imagem={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-ktZjl_h2-4blIEPnjjkguDWKGDPlr8CxazK9GxHeAjpY06ce7VqvdbWtbzjoll5sjROTPie_iA&usqp=CAc"}
                            desconto={"30%"} />
                    </Grid>
                    <Grid item md={3}>
                        <Produto 
                            nome={"bota"} 
                            categoria={"sapatos"} 
                            imagem={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAM1BMVEUBAAIBAAUBAAUBAQcBAANHcEwBAAUBAAMBAAQBAAQBAQYCAQcCAQcCAgjMcABMJgGISADHdSmqAAAAEXRSTlPv08mk9QDc6+fjuIRUKcXh1wR10CoAABWvSURBVHic7VyBVuQ4DrQdY8tJZ5r//9qrKslJGhqGgb3de/c2MNDTNElFKkkl2U16+Z860j8N4PH4F85nx/8pnF2fPz7+Gji3bcPnst1+CukvgHN7uS3Ltsbn/iNEP4azwyzbgmMjHAOi7QeAfgxnIxBZZlmXUvgg3/4hOPt+AwjaZV1pob4sZVnasnwX0M/gwC6yxwI4a17LWNayZDxetn8ADpCUBiT0UyutViBal7GYYC7f4NCP4CxlXQv+rVsZtSyWclnW3DLdB6eVvxXODuM0mGdtcFDthUe11nMHnC6gf+yyH8BZ1gbDlJwLPqwUa2VtqaY28HQDkfCzP6X09+HsuHgDZXBZK62BNr3nPJIZuIync8Pn3wdnywUoViDAJ65eti0nPM6prCWVnCwD0R/i+T4cgsiWahcm+gzJsKdeQegGKAADHq1/hufbcHbE0LCcYIRRQBkASrXWbmPUnBrQAWwFi/4Iz7fh3IaNbrAA+VJTh2PWFTQeo/VEOLBOGkjXpSx/A5yXAluMjOvnBjRwC9JyS9ZrTTaSw8zrQkZ/3UDftw4u2AAFFoLTBuhrrVWQhnXdesL/UofBEG32dYd9G85io9EERkKDKHRSZVChTCxwI0xU8TwRwz5frRc/gNPH4PUa6kPJBIPMvPIDBbVZ76m2XBIA56/nn2/DKbht64qnkeknBDjqFdMfaFRAZ+RnvKSY4dv634az4foJlLE0SBNUc0CBlXrto+NL7wacMA5BjvHF6vV9KldFFmrmQKBX86pglQ+RlY0HQEXE5y+m55/BSRVZD0dHjUDJIJjE/Fcs8ejgF/EYy/2X8HwfDi4GLPhETCOwlA0dDERGohBDTBnMA1cO1vuv4Pl+kQAchDqI4imP9ElNYEZlyUDOgd2Ix8hp5MkvRPsP4DDTNbhkMAElMSnAMA9RJSIZISMi/zRmy/YFOn8Xzr7JHFaZkkUaYMiDRgJRkHAi0MArAIZxGgz4e/N8F46cgdvHZUmh2pmYrfWgMhiFPIhoBxjVC6O7fi+evwtnMeVk6hrAoewCGHOHkdVJ9O1tqHxB1DeA+n32+bazoGxQBMgSM6kdgoGDWDeQkY2KDMzBJ5icGGOg1W9r15/D2W+M2D1RClNeIMkxdMBgSlRkYPgHTCGBEHt0FvUP6igs1X4nff4Mzo4GimkfRl9yp9SiwwargvIyDrBHWpDJmoGPB42OxMHq9Rvz/AEctHLMK7ztZjgtVdfomSRCTSiU8CBJTaMpxhhiK6V88+zDbNh+Z56vwtkXZjY6gykPN6siyvimRypvfDQVL1YFgkkEz2ytaAeXOirG74L9d3B22WSlixDVjXwAALASt8nEk3jTKOJKPmwrmAqNBZ4JOgs+BTT6jcrX2Ofm+RzOrSB38PodTMTBzII8gptt9eVFFbMjjtxhPal+D8plsZq6frixEGD8PdS3z9nzGZy9UArjnnh3Q5GBa7JTYIZz6WDUfLze0APGdmVOzGq9TImQX0zFH+Loc/Z8BucG1naqzM70AZvjFqHudHYqLAMxULczzYaIRgacYNT1ZZkELyaV9Q13g9d+Zp6P4ey35reX4vrItZ2kZFlM7DYTRRa8WIgUabgZwykr+dBwrBCkuLQY+0Fjy2qfpeZHODty3L5zxMZLIC5HSiGkZOpCczOC0l1BxLYXQriQzyxSrFgefIP+SQozsh9wOn9tDAXlF+AAA6vzYDjiE1IBH0yqqQoRoml1U91/8bjTW8zMrN3JTdZYI0gp1c5OZ+bmcKipKy070ifeOuAsbYgD/DQ1vLhBMEISlPIBt9tEgTQI5tcrG3ISHfmPtYkWpHtZvRINNRTkzfnstZ0VzMYnZJ5wmuIHWsk8sPlB84MM28ZzsAdO4mTrgPP661f1A6/gtXHrZFJmReVNgCWsFI1OZIYAbtKOQfgJmR3OJh1pkWNQEo35Bg9cr1AbaD4x/C5fw1s1L0LU5VUpvzbB5AADD65udxpcl/lEZwjORk0nNLqc0CRSsbMcMcizKz7iowfhqV93eKvuSsWD+gsWoLghGBYn9BUsoolkag4nCQ4l9udwqJymh5XjkigMVgMgqlLWiAtdU5UHR5gHcLZNmZktHisl+Vyp/ti7e5vMqkVaEkjXF5D5Q/MITqe1LfjmWIwjAFkiceSooR+UMeMZH4qtVzklGDRYEIZrnaaZBicrqmDsb2QeJgklofSheQRnqUME1KFOrnlIS/Ci80WwMvdQUtClqcNTd8KpHMIhMxeNM0xUobwZJogqI4QS3qKEpgU/ZI/g3NzUQ75tJgtJxnlGpnnlE5JDbO7t9VVcri9OCL8iq1nldQdf7bMLVjo91QSnKj/ZRyMEj6yqmNJ9R4bwXOzJolnYLTk0HPfX1/sr4DR2o511VXB0F8PUAWbnDDtD5me/AhOhRs8ftKQOZ03Da+UFRerzQaTlHhbjWfHyCjgJGW1F8pVRW9Pd1CQVRPmH7mqwnFUPFdY5Fi7OOD4wj8O5VXH44ei69OX/TAEqnLIGHoJKm7pjpZNBu/FFCD/KNNdHqrb3VxvedPEJijUbz1Ohw9nrGywHhAc4Timx2gGbmoqF/tMQ1++C2VmWYTBVgAHNhvORUxZP388rRRSJYv0NjD4RXMzVj6/6GWqYU2CXTGXCrI6GeRD+JE0I5vX+K87EoFB6as8HGgHn9tw8dqX1kQm6Lp7GmV6VDEUrxh+Txhg+0n1F9qZ97p5ITKpNyeepeSacB+Yc1J1wTH6o5wtctPfjDrcU2dmVo2whMMBx7zSQuX9FZkZZezrdDTgbU8pEJM52KbjIhBYC0Cu4FAeOls4zmn4kow1FKcApGdyTvOUGYwZkJWOuejqMDzhLD8nmx1FP5zPCWqmrqv9UGijZER+3KTd8OMdb6LTM/e5gUtSJrppOaVmejZ8Cznq59HmE8um6OtBImTbHIjj9vMON0r1onsGAYp2nbe4Ew9hWnTDXmoTFxbgP4ZQoB/2spHGE5YmgUYLRSjX511QvtWdJnn6k0YWnQ6S93ofY68rb2P4JLoXtk3FPwMlHaM8E40x2lSs2ryVxuaoFR8S0eqXjkmg3yWENLqrBPBIc5lpTYPWQqQfC4z2ZA047eZxmfnZfDf9P3hYk2lJXJ7IHV00P9i5VYljyXOVCvcXsBmghwUG7Jcn8zFsB500WnFm4R3jS2ly8a2tGdWscW5gT6EH3FiXcPlIYMHk9UClvchjla+sh4ct70RxwanoLx4UFk6yeoYLISRodN5vU/eOHS7br2TZNelgGInWZuhkPKEWWN38aikG2vpM9T+FE3R5ND6UomoI85FflYE2Goz59ON9qnqCtTrNa9K7SPTSKiCNk7xeWAs4bNApwKe+kToZxMtXYsqLrzFbVbyP2H+HcCHri0exFrRIARfOooPelA5D5LXtCYCiUTzRqqfs0lOisGkBAm/Fh1b1qXeYxPkY9Dw0oPQ+R0mwThcYJBfe9M8+E49E8i5WZjQMcZcpRxSFjN0RGqWnWi1Qfqs8eObJHqulaO1YrUF3yHAdTT9mfwNmTxMAFjaVTFZLPoQ/TsvSx2UI/ZM4IB3vQetWaO9e5vO+MgtHNF3Zq9/HKeSDW8zPryBGXQm4z0qeJhqeS7bYt3dbc2UtxmdOXqLer2Lx5HDthFdzenjTBSSHjgz3rYyWNpthN4BawA8VV7ZhmAtw3xLxs4fqh0Wjebg/lonq+CkDsL0QZv9Mx8TQ3z4NMvcDpR4k4c+KpObpEEzu47utmShyd3W/jVPRq9KJOOU0DRbZw+3bNfVs7zbO9g7PEJfvwUUF6yEOzuHIEwYbQm5R1RQ8h2eA9+BVP59BrOsy7pTFvFRxihxpjpFYeSsWEE6257r16kNUj1KKQMfZDCyEZUZAWDclk+Ha1z/6o+l3CjZAIXEZZuYNFwdUeCvt0ll9UHesHR9zilCHWQOp1RGpmur5ysqwpTUHGdt1bV//VyqmYFuC03vWwShrWmTFtM6xmFqqPgMaUQWkdaV0XVgu1nyybl9NuZQmYNAtT8qGlOHjwySoHUhBs6/oMztFjmrrYB8OcFBphnOV2owE8PJBkcq4PeOqWwzjCw5Gqy9/EnUZV8/jhP7suajuc3A885gO/d2AOPAz4Xm63bQuZR4uCzk6XeeYlbeEt1VHV8WCytvR1n2vo7i4toODsY0b3DKIHPI8hxv7Wxrrm0b3QUoi2MiTu6+y8bnVdJnn0sjbke8UTt9gkfecnasXtAc7tTHwWI8J8cvra+cmdzT06Y4w1Pmt/AY9ZFHPdivdBycNUXR9XSZlt/NW9u3Y8zeOzwd7nRMdiZDnK2y75RMcQmWWAA52FtTTz7LrkHuaxrQecqu0jygeRGIa3AG47s8M8grN6Oua50h3Sn5Dy+9ScYsgiBeQDIQiNUpdCb4XO75M+rS7LHPU2nzXhnya58q8E7GzOliscP7OM0O539K9E9BF5fLxkUWnLdlsrNOlS2xp46hLmwfNxuabugWWmOxhO6C0yAb9O8xDOngIOzodO7TWN6ILfjnxSzAtVl/VtQ4Td2liR1jPh+AjQRUyuJcyjp5P67qHmwlW9L/S4/ZYTzpai1yOzXl9dU55Ufqujj9oD+ywrN03rilzlU7Awgm9hHm2GqD4Y7N4N1l5cXfaQhCJzmCcpCfo6keqKxYTB3oF4RMSum4tK/kouByber9ZrYndVgXk0hlJx0tmTtEnz+ZTrVqayMYMrHUlQNOVIzSN9SuX63jynJvP5o8dY1qqsr14D003mWUiQKQp9BD6keIRnPn8GF+H0yVAvER7oT6n85uC5Z01tPdmhgSU4tr2h5Ksp1tArhlTea5lukw99smGuClMo02NEEGc/pft76hwHztJmwiIcbS9ykeO7CktbrGpm4PwVHG+c1cUrslykDe2PT1HOZ6FOnluCO4foeYaJnOB+HVzidqMGjW7OM63vKizaieFnGvrqeHuM045kiPvZHM54mLA7O55Qub4zVSx6wNbrMnL3BUpHE6N4ny5zv4Nm0ToBF15oPB8VxjVJeO6NTy+3gJMuk1KHU9O0UE1XLPO7FoIVqSyHKYCYh8OwADQRCZQgqGU37wfmZXFj3NmRXpYj4723zmU4eUA7/jNTJ1eI8qWMzZ5Gac4B5YmJusc0PAzaHJoR5ZUbF17KmYA9bv3BSO9482ijFK/lkk4ZLWZTE0xE2QR0HOqMteKiYYImqTElHfBWeoGZr+2U33K/rhFfvl+5c+RtrcjatE50n7H+My7WcZDV0mzUtGLgr+U35Kq0j+ZS6/RiP7ubeprnbXzNAOBYVivVVyxxgXaxjZSLSmyA0SRcxhmeWsZGOFx6rsc1mD66t+zn8T7Oq4icpE251Wz0GCVOOOGpySGXUZJb9WjT2Sy7mdzHC+CsrGBceA0bucPGdNajdeqBLDZnIF+Y55y4w8sRYyUOyqZwtLauxc4hi+BYqEIbe9qXVbO1Zr7UMNdk+tHW1HckdiIndfXDh0l+uSCMReI92BSMNG59z1pDdgKZsvQRW21HoOMlcw5NZ04zXcZGb4mjOJCvtJzMnSdHcYnLT3McR5Ic0d54328EAuGeqla6Qs80Wmej9PaVFAXBVI7T9tOPJ6AeCYy+Cqk2zfMA45H5fS1NW+aKNmH67ECr9jMiC+Hw4AZJ/c7bPKGsavVindhAM31FR8c65bXMvDugjSC7+MYSbUQfU1nFIodS1YSz6v1e3FU32wmPQ7FVA5MLhz24u/vK6K2LDz88AIcl3rNz1zR1aK1dhtU3SEJS2fHEofcUaaRnYSiufOY2WybxPPmGke5N66cwJhrkSlP9EkelewhG6iOm0Jb3A856gUTKtVB1OTZB5zPUdENiTpLk/AIabu1p5rmZ/+At03DDZOGqXS6E81LkqPUCZlkDyXK/a86ApAtx7XLOWdTDVyNZ/42q5u/oPSbdC5jDmYVCUVirz47zLb1k99DqDHIwbhqopzv6nLu2Lninr5OrNaFxaaAnvgpax//QCDPdtJjsasDZfOkk4FRfPMZPAWcdbh931rrmFjpO2yi5K/s+tGzGN2FEPow6qzi1tznyEJV644KTkRvnmraGFIczx8siUJVtcMPUO9xqqL3gIrFJ5k7zuI2KdrISz/DBtnd+WiyYcB5twy08OqO0adXmw6btIbQOpy82wfDXfR8N5Gl62Xzr2ggNO0b0bica4WG0UWn5VkqlHs+BDzNA1daWA4n6XsBa+NaX7BtnspVWtGlWcV61fqhrN8mvW+LOxDTz+tkYtkkhH+Mp+mnINufhKToOgdAsgmZ2IMO3XBUxoIRE1aAVTWjxHWa+isAHrowkTl9S1H5NsrsdPb12yLTTRr6VS5csXkkESqQMzAKtDSqcjs441ZZlflCyc1Wt+KQgRVtjXgzK7o2Ny0zVoWhUk8XanE9gIwdpxSdzMWte3W0hFNr+wZuVgS5Zo/hYh2dI+FZ5pkAT0wDXsrOxeVlnQdTSaiz0Hkpciwpdrh8yPt/J5wPEEHld69pcib7CCDCaZarQ8K02EHrwlbJM8vCeSwXb0RS/lEMgc7OZb5J7iBXKbL+2uwD2tz5HRWLuOxzTTS5cJJe5h7py0aD6vUby05fLfGfbcnjLhaDHWAqCOiJufZPIvHBieQ7C0yp3d3oHRjhqfioZTtpV34Nt1bePQFFeh3H7tqiUS7DH6ocdWsGNMLzcQN+2E9ATHMp6Mf/jlKmrOe6dG+Q7d8yO6tGkxih1j6/HyenLbdGm+VhJs9Nd2tipdcTsTRx3bObxFlGkmdiuGHYcHAlyysEGmL6CZta7pnrct1mMDu34ewMPO3Lb1KKnVeY80Xd0oGtjrGrdOJeZ7ERn84aBY8AUI+yq3QZc8+J+ObhEid8XJC0dmcdQpLbbWzgOadvWOSE+kSVfTmRHVmUh860hc9Kkd2mpVyfFTJNJQlfyYjavaMAjBrg7wGucwucg4/4EjmMiKHdAjmuyPAgB34fQlETNZ33e4sVeZOpqWqQdGlv7dRtHN/vuJy2hLnyGaTMun1rnKTS9edgbSu3WdkVvmodW7xu4P1HAuu8WHg5NFem6PrTruMXNFldZ23bb33PnU1SIPb7jQPt+i7yiZlIDZr3nAGax2H3pcIjVUyP/0MJX/3zIl9/UspUR75PNsgiLVXehYr74IWABR/Oddkim8lVEX3+PDWy8Riw7HG/+SC3PTCcc8yTmfVvJJarwuj3dnPc9OBPUbRku/runsoCT1PjXs/2JVWtXA/pKr/1170A6DpjJVxPVGrvYpXyeBWXOXiea0HBe6j830Pff+cj3VGzn/jzvo69jnjY1ZTkOBNLn76f74Z90ASSELf/CzLZ4vxjD0zn2uoD5Soj91X8sSXmFC6X6KziMcg91ZpcvxNb/6d9u+ouOf+F8dvwL57PjP8pyjkLuPzmtAAAAAElFTkSuQmCC"}
                            desconto={null} />
                    </Grid>
                </Grid>
            </Container>
            {/* <Footer /> */}
        </>
    )
}
