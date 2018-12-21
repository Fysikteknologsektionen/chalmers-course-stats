import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          <a href="https://github.com/Fysikteknologsektionen/chalmers-course-stats" target="_blank" rel="noopener noreferrer" title="GitHub Repository"><i class="fab fa-github"></i> GitHub</a> | <a href="https://github.com/Fysikteknologsektionen/chalmers-course-stats/blob/master/API.md" target="_blank" rel="noopener noreferrer">API</a>
        </p>
        <p>© {(new Date()).getFullYear()} Fysikteknologsektionen</p>
      </footer>
    );
  }
}

export default Footer;
