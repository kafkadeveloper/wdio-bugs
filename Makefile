all:
	./node_modules/.bin/wdio

fruitshoppe: install
	./node_modules/.bin/wdio --spec specs/fruitshoppe.js

wpengine: install
	./node_modules/.bin/wdio --spec specs/wpengine.js

install:
	npm install