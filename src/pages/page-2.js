import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
	<div class="toggle"></div>
	        <div class="content">
	           <Layout>
	    <SEO title="Page two" />
	    <h1>Hi from the second page</h1>
	    <p>Welcome to page 2</p>
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>
    </div>
    $(document).ready(function(){
        $('.toggle').click(function(){
            $('.toggle').toggleClass('active')
            $('body').toggleClass('night')
        })
    })
)

export default SecondPage
