init:
	pnpm run init
	make husky-init

dev:
	pnpm run dev

build:
	pnpm run build
	git add .
	git commit -m 'build: github page' 

husky-init:
	pnpm run prepare
