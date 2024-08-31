import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Hero extends Component {
  render() {
    return (
        <>
        <div className="pq-breadcrumb">
<div className="container">
    <div className="row align-items-center">
        <div className="col-lg-12">
            <nav aria-label="breadcrumb">
                <div className="pq-breadcrumb-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="pq-breadcrumb-container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <Link to="/"><i className="fas fa-home mr-2"></i>Home</Link>
                        </li>
                        <li className="breadcrumb-item active">{this.props.title}</li>
                    </ol>
                </div>
            </nav>
        </div>
    </div>
</div>
</div>
    </>
    )
  }
}
