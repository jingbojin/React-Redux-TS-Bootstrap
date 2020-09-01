import React from 'react';
import { FaGithub, FaReact, FaVuejs } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';

export const Footer = React.memo((): JSX.Element => {
    return (
      <p className="align-middle text-center font-weight-lighter">
        Part of the vue <FaVuejs color={'green'}/>
        {' '}<Badge pill variant="light">vs</Badge>{' '}
        <FaReact color={'blue'}/>{' React '}
        experiment, click
        <a
          className=""
          href="http://vue.jingbojin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' here '}<FaGithub color={'black'}/>{' '}
        </a>
        for vue version.
      </p>
    );
  }
);
