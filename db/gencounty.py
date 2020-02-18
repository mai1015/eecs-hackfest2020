c = open('country', 'r')
cd = open('countrycode', 'r')
cl = c.readlines()
cdl = cd.readlines()

code = {}
code['Bahamas'] = 'BS'
code['Bolivia'] = 'BO'
code['Central African Republic'] = 'CF'
code['Comoros'] = 'KM'
code['Congo (Congo-Brazzaville)'] = 'CG'
code['Czechia (Czech Republic)'] = 'CZ'
code['Democratic Republic of the Congo'] ='CD'
code['Dominican Republic'] = 'DO'
code['Eswatini (fmr. \\"Swaziland\\")'] = 'SZ'
code['Gambia'] = 'GM'
code['Holy See'] = 'VA'
code['Iran'] = 'IR'
code['Laos'] = 'LA'
code['Marshall Islands'] = 'MH'
code['Micronesia'] = 'FM'
code['Moldova'] = 'MD'
code['Myanmar (formerly Burma)'] = 'MM'
code['Netherlands'] = 'NL'
code['Niger'] = 'NE'
code['North Korea'] = 'KP'
code['North Macedonia'] = 'MK'
code['Palestine State'] = 'PS'
code['Philippines'] = 'PH'
code['Russia'] = 'RU'
code['South Korea'] = 'KR'
code['Sudan'] = 'SD'
code['Syria'] = 'SY'
code['United Arab Emirates'] = 'AE'
code['United Kingdom'] = 'GB'
code['United States of America'] = 'US'
code['Venezuela'] = 'VE'
code['Vietnam'] = 'VN'
for co in cdl:
   ll = co.rstrip("\n").split(', ')
   code[ll[0]] = ll[1]

for co in cl:
	ll = co.rstrip("\n").split(', ')
	print("insert into country(name, code, population, area, density) VALUES ('{}', '{}', {}, {}, {});".format(ll[0],code[ll[0]],ll[1],ll[2],ll[3]))