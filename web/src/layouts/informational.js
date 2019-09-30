import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

import DefaultLayout from './default'

const Layout = props => (
    <DefaultLayout>
        {props.seo}

        <div className="md:shadow-none shadow flex flex-wrap mb-4">
            <div className="lg:w-2/5 w-full flex flex-col text-center">
                {props.info}
            </div>
            <div
                className={`lg:w-3/5 w-full flex-grow bg-gray-200 border ${
                    props.mainImage ? null : 'flex'
                }`}
            >
                <div className="mx-auto">
                    {props.mainImage ? (
                        <div>
                            <Image
                                className="w-full bg-gray-300 block"
                                fluid={props.mainImage.asset.fluid}
                            />
                        </div>
                    ) : (
                        <div className="h-full flex items-center text-blue-secondary p-8">
                            <i className="text-250px far fa-file"></i>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="style-normal md:w-2/3 w-full mx-auto p-8">
            {props.children}
        </div>
    </DefaultLayout>
)

Layout.propTypes = {
    seo: PropTypes.object.isRequired,
    info: PropTypes.object.isRequired,
    mainImage: PropTypes.object
}

export default Layout
