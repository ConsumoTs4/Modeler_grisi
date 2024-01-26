build:
	sf modeler workspace cleanup
	sf modeler workspace build
	sh ./scripts/replace-logo-salesforce.sh

validate:
	sf modeler workspace validate

package:
	sf modeler workspace package

deploy:
	make validate
	make build
	make package

server:
	sf modeler workspace server start
