c = open('chinap', 'r')
cl = c.readlines()

for l in cl:
    ll = l.rstrip("\n").split(',')
    print('UPDATE province SET lat={}, lng={} WHERE name=\'{}\''.format(ll[5], ll[4], ll[0].capitalize()))
