import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (

    <div class="toggle"></div>
        <div class="content">
          <Layout>
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
          </Layout>
    </div>
//<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    $(document).ready(function(){
        $('.toggle').click(function(){
            $('.toggle').toggleClass('active')
            $('body').toggleClass('night')
        })
    })

)

export default IndexPage
