import './Banner.css'

interface BannerProps {
    srcImg: string,
    textoAlternativo?: string
}

const Banner = ({ srcImg, textoAlternativo }: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={srcImg} alt={textoAlternativo} />
        </header>
    )
}

export default Banner;