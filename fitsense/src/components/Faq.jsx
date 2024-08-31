
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFaqs } from '../store/faqSlice';
import Hero from "../components/Hero";

const Faq = () => {
  const dispatch = useDispatch();
  const { faqs, status, error } = useSelector((state) => state.faq);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFaqs());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Hero title="FAQ"/>
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <img src="/images/faq/2.jpg" className="img-fluid w-100" alt=""/>
            </div>
            <div className="col-xl-6 mt-4 mt-xl-0 ps-xl-5">
              <div className="pq-section-title pq-style-1">
                <h2 className="pq-section-main-title">FREQUENTLY ASKED QUESTIONS</h2>
                <p className="pq-section-description">It is a long established fact that a reader will be by the readable of a page when looking reader will be by the readable at its layout.</p>
              </div>
              <div className="pq-accordion-block">
                {faqs.map(faq => (
                  <div key={faq.id} className="pq-accordion-box">
                    <div className="pq-ad-title">
                      <h4 className="ad-title-text">
                        {faq.question}
                        
                      </h4>
                    </div>
                    <div className="pq-accordion-details">
                      <p className="pq-detail-text">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
