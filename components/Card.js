import styled from "@emotion/styled";

function Card({ movie }) {
  const url = movie.attributes.poster.data.attributes.url;
  const posterUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  return (
    <CardStyled>
      <div className="poster">
        <img src={posterUrl} alt="" />
      </div>
      <div className="body">
        <h3>{movie.attributes.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.attributes.discription }} />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 400px;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      line-height: 1.5;
    }
  }
`;

export default Card;
