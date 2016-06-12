WEBPACK := webpack
ESLINT := node_modules/.bin/eslint

WFLAGS = --progress
SRC = $(shell find lib -name "*.js" -type f | sort)

REPORTER ?= dot
INTERFACE ?= qunit

all: build

build:
	$(WEBPACK) $(WFLAGS)

clean:
	rm -rf dist/

lint:
	@$(ESLINT) $(SRC)

test-unit:
	@./node_modules/.bin/mocha \
		-R $(REPORTER) \
		-u $(INTERFACE)

test: lint test-unit
