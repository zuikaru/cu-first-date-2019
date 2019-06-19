import React from 'react'
import Linkify from 'react-linkify'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavigationBar from '../components/common/navigation-bar'
import View from '../components/common/view'
import ImageView from '../components/common/image-view'
import SectionTitle from '../components/common/section-title'
import classNames from 'classnames'
import ChulaEngineeringIcon from '../components/common/chula-engineering-icon'
// import GatsbyImage from '../components/common/gatsby-image'

const PerClubView = ({ pageContext }) => {
    const renderImages = () => {
        if (pageContext.images && pageContext.images.length > 0) {
            return pageContext.images.map((value, index) => (
                <img
                    key={index}
                    className={classNames('w-full', {
                        'mb-10': index !== pageContext.images.length - 1
                    })}
                    src={value}
                    alt={pageContext.name}
                />
            ))
        }
    }

    const getColor = () => {
        switch (pageContext.type.toUpperCase()) {
            case 'ACADEMIC':
                return 'blue'
            case 'SPORT':
                return 'orange'
            default:
                return 'gray'
        }
    }

    const componentDecorator = (href, text, key) => (
        <a className="text-cu" href={href} key={key} target="_blank" rel="noopener noreferrer">
            {text}
        </a>
    )

    const mainColor = getColor()

    return (
        <Layout>
            <SEO title={pageContext.name} />
            <NavigationBar pageTitle={pageContext.name} />
            <section className="bg-white">
                <View className="py-20">
                    <SectionTitle
                        en={pageContext.type.toUpperCase()}
                        th={pageContext.name}
                        icon={<ChulaEngineeringIcon />}
                        color={mainColor}
                    />
                    <p className="font-headline text-lg leading-loose text-gray-700">
                        <Linkify componentDecorator={componentDecorator}>
                            {pageContext.description}
                        </Linkify>
                    </p>
                </View>
            </section>
            <section className="bg-gray-100 py-20">
                <ImageView>{renderImages()}</ImageView>
            </section>
        </Layout>
    )
}

export default PerClubView
