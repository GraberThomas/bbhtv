import Image from 'next/image'
import Button, { buttonDirection, buttonSize } from '@/app/ui/buttons/Button'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer
            className={
                'bg-footer-bg flex h-[428px] w-full flex-col items-center justify-center bg-center bg-no-repeat pt-[124px]'
            }
        >
            <div
                id={'media_container'}
                className={'flex w-[424px] items-center justify-between'}
            >
                <Image
                    src={'/media/facebook.svg'}
                    alt={'Facebook logo'}
                    width={24}
                    height={24}
                />
                <Image
                    src={'/media/twitter.svg'}
                    alt={'Twitter logo'}
                    width={24}
                    height={24}
                />
                <Image
                    src={'/media/instagram.svg'}
                    alt={'Instagram logo'}
                    width={24}
                    height={24}
                />
                <Image
                    src={'/media/Linkedin.svg'}
                    alt={'Linkedin logo'}
                    width={24}
                    height={24}
                />
                <Image
                    src={'/media/TikTok.svg'}
                    alt={'TikTok logo'}
                    width={24}
                    height={24}
                />
                <Image
                    src={'/media/youtube.svg'}
                    alt={'Youtube logo'}
                    width={24}
                    height={24}
                />
            </div>
            <Image
                src={'/logo_lumy.svg'}
                alt={'Logo of Lummy'}
                width={60}
                height={20}
                className={'mt-[52px]'}
            />
            <div
                id={'mention'}
                className={'text-gris-02 mb-[124px] mt-[52px] flex'}
            >
                <Button
                    direction={buttonDirection.NONE}
                    size={buttonSize.SM}
                    bgColor={'link'}
                >
                    <Link href={'#'}>Mention légales</Link>
                </Button>
                <Button
                    direction={buttonDirection.NONE}
                    size={buttonSize.SM}
                    bgColor={'link'}
                >
                    <Link href={'#'}>Site officiel</Link>
                </Button>
            </div>
        </footer>
    )
}

export default Footer
