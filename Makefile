all:
	./node_modules/.bin/wdio

google: install
	./node_modules/.bin/wdio --spec specs/google.js

fruitshoppe: install
	./node_modules/.bin/wdio --spec specs/fruitshoppe.js

wpengine: install
	./node_modules/.bin/wdio --spec specs/wpengine.js

install:
	npm install