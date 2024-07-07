import React from 'react';
import { Badge, Card, Form, Figure } from 'react-bootstrap';

const PostContent = () => {
  return (
    <div className="col-lg-8">
      <article>
        <header className="mb-4">
          <h1 className="fw-bolder mb-1">Welcome to Blog Post!</h1>
          <div className="text-muted fst-italic mb-2">Posted on January 1, 2023 by Start Bootstrap</div>
          <Badge bg="secondary" className="me-1">Web Design</Badge>
          <Badge bg="secondary">Freebies</Badge>
        </header>
        <Figure className="mb-4">
          <Figure.Image
            className="img-fluid rounded"
            src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
            alt="..."
          />
        </Figure>
        <section className="mb-5">
          <p className="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind...</p>
          <p className="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere...</p>
          <p className="fs-5 mb-4">If you get asteroids about a kilometer in size...</p>
          <h2 className="fw-bolder mb-4 mt-5">I have odd cosmic thoughts every day</h2>
          <p className="fs-5 mb-4">For me, the most fascinating interface is Twitter...</p>
          <p className="fs-5 mb-4">Venus has a runaway greenhouse effect...</p>
        </section>
      </article>
      <section className="mb-5">
        <Card bg="light">
          <Card.Body>
            <Form className="mb-4"><Form.Control as="textarea" rows={3} placeholder="Join the discussion and leave a comment!" /></Form>
            {/* <!-- Comments section--> */}
                    <section class="mb-5">
                        <div class="card bg-light">
                            <div class="card-body">
                                {/* <!-- Comment with nested comments--> */}
                                <div class="d-flex mb-4">
                                    {/* <!-- Parent comment--> */}
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Commenter Name</div>
                                        If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                        {/* <!-- Child comment 1--> */}
                                        <div class="d-flex mt-4">
                                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div class="ms-3">
                                                <div class="fw-bold">Commenter Name</div>
                                                And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                            </div>
                                        </div>
                                        {/* <!-- Child comment 2--> */}
                                        <div class="d-flex mt-4">
                                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div class="ms-3">
                                                <div class="fw-bold">Commenter Name</div>
                                                When you put money directly to a problem, it makes a good headline.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Single comment--> */}
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Commenter Name</div>
                                        When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default PostContent;
