import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react'; 

// Import Styled Components
import { FooterContainer, FlexWrap } from './Footer.atoms';
import Link from 'next/link';

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
    url,
    imgSrc,
    altText,
}) => {
    const style = {
        border: 'none',
    };

    return (
        <Link href={url} passHref>
            <a
                css={{
                    border: 'none',
                }}
                target='_blank'
                rel='noopener noreferrer'
            >
                <img
                    css={{
                        width: '24px',
                        height: '24px',
                    }}
                    width='24px'
                    height='24px'
                    src={imgSrc}
                    alt={altText}
                />
            </a>
        </Link>
    );
};

const CopyNotice = styled.div(() => css({
    fontSize: '0.75em',
    margin: '30px 0 20px 0',
    textAlign: 'center',
}));


const Title = styled.div(() => css({
    color: '#fafafa',
    backgroundColor: '#141414',
    fontSize: '2.5em',
    fontWeight: 'lighter',
}));

const FooterTitle = styled.div(() => css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
}));

const SocialWrapper = styled.div(() => css({
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',

    ['a']: {
        display: 'block',
        margin: '0 10px',
    },
}));

const Footer = () => (
    <>
        <FooterContainer>
            <FlexWrap>
                <FooterTitle>
                    <div css={{
                        marginRight: '10px',
                    }}>
                        <img height="60px" width="60px" src='tombstone-red.svg' alt="Tombstone" />
                    </div>
                    <Title>Killed by Netflix</Title>
                </FooterTitle>
                <div>
                    <p>
                        Killed by Netflix is the Netflix graveyard; a free and open source
                        list of discontinued Netflix shows.
          </p>
                    <p>
                        <a
                            href="https://github.com/WPRobson/killedbynetflix/graphs/contributors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contributors
            </a>
            &nbsp;from around the world help compile, research, and maintain the
            information about canceled Netflix shows. You can join the
            discussion on&nbsp;
            <a href="https://github.com/WPRobson/killedbynetflix">GitHub</a>.
          </p>

                </div>
                <CopyNotice>
                    <a href="https://github.com/WPRobson/killedbynetflix/blob/main/LICENSE">
                        &copy; 2022 Will Robson.
          </a>
          &nbsp;-&nbsp;
          <a href="https://analytics.kbg.rip" target="_blank" rel="noopener noreferrer">
                        Analytics
          </a>
                </CopyNotice>
                <SocialWrapper>
                    <SocialLink
                        url="https://github.com/WPRobson/killedbynetflix"
                        altText="GitHub"
                        imgSrc='https://static.killedbynetflix.info/com/github.svg'
                    />
                </SocialWrapper>
            </FlexWrap>
        </FooterContainer>
    </>
);
export default Footer;
