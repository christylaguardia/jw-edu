import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const Resource = ({
  id,
  type,
  tags,
  yearPublished,
  description,
  embedHtml,
  // purchaseUrl,
}) => (
  <div className="container">
    <div className="columns">
      {embedHtml && (
        <div className="column is-one-third">
          <div className="container">
            <div className="section">
              <div dangerouslySetInnerHTML={{ __html: embedHtml.embedHtml }} />
            </div>
          </div>
        </div>
      )}
      <div className="column">
        <div className="container">
          <div className="section">
            <div className="content">
              {description && (
                <>
                  <p className="has-text-grey	has-text-weight-semibold">
                    Description
                  </p>
                  <p>{description.description}</p>
                </>
              )}
              {yearPublished && (
                <>
                  <p className="has-text-grey	has-text-weight-semibold">Published</p>
                  <p>{yearPublished}</p>
                </>
              )}
              {tags && (
                <div className="tags are-medium">
                  {tags.map(tag => (
                    <Link
                      key={tag.id}
                      to={`/tags/${tag.id}`}
                      className="tag is-link"
                    >
                      {tag.tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Resource.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    })
  ),
  yearPublished: PropTypes.string,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  description: PropTypes.shape({
    description: PropTypes.string,
  }),
  embedHtml: PropTypes.string,
  purchaseUrl: PropTypes.string,
}

export default Resource
