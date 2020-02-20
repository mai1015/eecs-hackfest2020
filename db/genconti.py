c = open('continent', 'r')
cl = c.readlines()

for l in cl:
    ll = l.rstrip("\n").split(',')
    print('UPDATE country SET continent=\'{}\' WHERE code=\'{}\';'.format(ll[1],ll[0]))
