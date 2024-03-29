FROM jekyll/jekyll

COPY --chown=jekyll:jekyll Gemfile .
COPY --chown=jekyll:jekyll Gemfile.lock .

RUN bundle install


CMD ["jekyll", "serve"]