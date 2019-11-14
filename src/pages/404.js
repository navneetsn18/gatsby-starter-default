import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
	<div class="toggle"></div>
        <div class="content">
           <Layout>
		    <SEO title="404: Not found" />
		    <h1>NOT FOUND</h1>
		    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		  </Layout>
    </div>
    $(document).ready(function(){
        $('.toggle').click(function(){
            $('.toggle').toggleClass('active')
            $('body').toggleClass('night')
        })
    })
)

export default NotFoundPage
